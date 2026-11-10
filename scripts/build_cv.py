"""Build the editable English CV: python scripts/build_cv.py [--output path]."""

import argparse
import json
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    HRFlowable, KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer,
)

ROOT = Path(__file__).resolve().parents[1]
BLUE = colors.HexColor("#2161BF")
INK = colors.HexColor("#17202D")
MUTED = colors.HexColor("#505D70")


def build(output: Path) -> None:
    data = json.loads((ROOT / "content/cv.json").read_text(encoding="utf-8"))
    style = {
        "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=23, leading=27, textColor=BLUE),
        "headline": ParagraphStyle("headline", fontName="Helvetica-Bold", fontSize=9.2, leading=13, textColor=INK),
        "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.5, leading=13, textColor=INK, spaceAfter=5),
        "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=10, leading=14, textColor=BLUE, spaceBefore=10, spaceAfter=4, keepWithNext=True),
        "title": ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=INK, spaceBefore=5, keepWithNext=True),
        "subtitle": ParagraphStyle("subtitle", fontName="Helvetica", fontSize=8.5, leading=12, textColor=MUTED, spaceAfter=4, keepWithNext=True),
        "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9.5, leading=13, textColor=INK, leftIndent=10, firstLineIndent=-7, spaceAfter=3, alignment=TA_LEFT),
    }

    def p(text, kind="body"):
        return Paragraph(escape(text), style[kind])

    def link(item):
        return '<link href="{}" color="#2161BF">{}</link>'.format(
            escape(item["url"], {'"': "&quot;"}), escape(item["label"]))

    story = []
    for page_index, page in enumerate(data["pages"]):
        if page_index:
            story.append(PageBreak())
        story.extend([p(data["name"], "name"), Spacer(1, 4), p(data["headline"], "headline")])
        contacts = [link({"label": data["email"], "url": "mailto:" + data["email"]})]
        contacts.extend(link(item) for item in data["links"])
        story.extend([Spacer(1, 5), Paragraph(" | ".join(contacts), style["body"])])
        for section in page["sections"]:
            story.append(p(section["title"], "section"))
            story.append(HRFlowable(width="100%", thickness=0.6, color=BLUE, spaceAfter=6))
            story.extend(p(text) for text in section.get("paragraphs", []))
            for item in section.get("items", []):
                block = [p(item["title"], "title")]
                if item.get("subtitle"):
                    block.append(p(item["subtitle"], "subtitle"))
                if item.get("text"):
                    block.append(p(item["text"]))
                block.extend(p("- " + text, "bullet") for text in item.get("bullets", []))
                if item.get("link"):
                    block.append(Paragraph(link(item["link"]), style["body"]))
                block.append(Spacer(1, 3))
                story.append(KeepTogether(block))

    def footer(canvas, doc):
        canvas.setTitle("Jiho Kim - Curriculum Vitae")
        canvas.setAuthor("Jiho Kim")
        canvas.setFont("Helvetica", 8)
        canvas.setFillColor(MUTED)
        canvas.drawString(38, 23, "Jiho Kim | Curriculum Vitae")
        canvas.drawRightString(A4[0] - 38, 23, f"{doc.page}")

    output.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(str(output), pagesize=A4, leftMargin=38, rightMargin=38,
                            topMargin=32, bottomMargin=36, pageCompression=1)
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(f"Built {output}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=ROOT / "Jiho_Kim_CV.pdf")
    build(parser.parse_args().output.resolve())
