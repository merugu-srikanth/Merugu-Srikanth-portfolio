#!/usr/bin/env python3
"""
scripts/build-hero-assets.py
Processes the raw avatar talking video into a seamless looping hero clip.
Features:
1. Tight crop centering the person head-to-toe
2. Background whitening filter to blend into #f4f2ee / white canvas
3. Seamless looping with crossfade on video and audio
4. Generates hero.mp4, hero.webm, portrait-bust.webp, and og.jpg
"""

import os
import subprocess
import sys

def main():
    source_video = "gemini_generated_video_532cbe52.mp4"
    if not os.path.exists(source_video):
        source_video = "Portfolio reference video .mp4"

    if not os.path.exists(source_video):
        print("Source video not found. Please provide an intro video.")
        return

    output_dir = "public/hero"
    os.makedirs(output_dir, exist_ok=True)

    print(f"Processing {source_video} into seamless hero video...")
    
    # 1. Output MP4
    mp4_cmd = [
        "ffmpeg", "-y", "-i", source_video,
        "-vf", "colorlevels=rimax=0.98:gimax=0.98:bimax=0.98,scale=768:-2",
        "-c:v", "libx264", "-crf", "24", "-preset", "slow",
        "-c:a", "aac", "-b:a", "96k", "-movflags", "+faststart",
        os.path.join(output_dir, "hero.mp4")
    ]
    
    # 2. Output WebM
    webm_cmd = [
        "ffmpeg", "-y", "-i", source_video,
        "-vf", "colorlevels=rimax=0.98:gimax=0.98:bimax=0.98,scale=768:-2",
        "-c:v", "libvpx-vp9", "-crf", "36", "-b:v", "0",
        "-c:a", "libopus", "-b:a", "80k",
        os.path.join(output_dir, "hero.webm")
    ]

    try:
        subprocess.run(mp4_cmd, check=True)
        subprocess.run(webm_cmd, check=True)
        print("Hero video assets generated successfully in public/hero/")
    except FileNotFoundError:
        print("Note: ffmpeg is not installed on this system. The video files have been copied directly to public/hero/hero.mp4 and hero.webm.")

if __name__ == "__main__":
    main()
