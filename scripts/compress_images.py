#!/usr/bin/env python3
"""
Compress images for the web without visible quality loss.

Usage:
    python compress_images.py photo.png                 # -> photo.webp, quality 82
    python compress_images.py *.jpg --quality 75
    python compress_images.py logo.png --max-width 240   # downscale oversized art first

Requires: pip install Pillow
"""
import argparse
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is required: pip install Pillow")


def compress(path: Path, quality: int, max_width: int | None) -> None:
    img = Image.open(path)
    before = path.stat().st_size

    if max_width and img.width > max_width:
        ratio = max_width / img.width
        img = img.resize((max_width, round(img.height * ratio)), Image.LANCZOS)

    out_path = path.with_suffix(".webp")
    # method=6 is slowest/best compression; fine for a one-off batch job.
    img.save(out_path, "WEBP", quality=quality, method=6)

    after = out_path.stat().st_size
    pct = 100 * (1 - after / before)
    print(f"{path.name}: {before/1024:.0f}KB -> {out_path.name}: {after/1024:.0f}KB ({pct:.0f}% smaller)")


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("files", nargs="+", help="Image files to compress")
    parser.add_argument("--quality", type=int, default=82, help="WebP quality 0-100 (default 82; photos rarely need above 85)")
    parser.add_argument("--max-width", type=int, default=None, help="Downscale to this width first (px) if the source is larger")
    args = parser.parse_args()

    for f in args.files:
        compress(Path(f), args.quality, args.max_width)


if __name__ == "__main__":
    main()
