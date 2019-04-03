---
layout: post
title:  "Fix voor crashende Wacom Tablet drivers"
date:   2018-10-16 20:22:49 +0200
tags: wacom
---

Als je een Wacom Tablet gebruikt heb je het vast weleens gemerkt: de drivers crashen zo nu en dan als je je Mac uit de slaapstand haalt. Mijn oplossing was dan altijd het rebooten van m’n Mac maar dat is [sinds ik deze fix heb gevonden](https://markbtomlinson.com/2015/03/15/wacom-tablet-driver-restart-mac/) verleden tijd. In het kort: ga naar `/Library/Application Support/Tablet/` en herstart daar handmatig de tabletdriver. De driver eerst geforceerd afsluiten via Activity Monitor wil ook nog weleens helpen.
