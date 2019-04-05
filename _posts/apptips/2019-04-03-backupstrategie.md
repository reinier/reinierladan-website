---
layout: post
title:  "Mijn Backupstrategie"
tags: backup, arq, b2
description: Een backup geeft je rust en is helemaal niet zo moeilijk om in te regelen. Dit zijn mijn backupmethodes.
image: https://reinierladan.nl/assets/broken-macbook.jpg
---

![MacBook kapot](https://reinierladan.nl/assets/broken-macbook.jpg)

Via [een tweet van Patrick Loonstra](https://twitter.com/patrickloonstra/status/1112990307216510976) kwam ik erachter dat het [31 maart World Backup Day](https://www.forbes.com/sites/tomcoughlin/2019/03/31/world-backup-day-2019/) was. En daarmee wordt dus niet een nederzetting op Mars bedoeld (wat een prima backup voor de wereld zou zijn) maar een dag om even stil te staan bij hoe je jouw gegevens backupt.

[Patrick heeft hier zelf een stuk over geschreven](https://www.patrickloonstra.nl/notities/backup-dag-dus-back-alles-op/) en het leek me een goed idee om ook te doen.

## Arq + B2

[Arq is een Mac app](https://www.arqbackup.com) waarmee je zelf bepaalt naar welke clouddienst je een backup maakt. De backup wordt ook nog eens op jouw computer versleuteld zodat niemand aan de andere kant van de lijn in je bestanden kan rondneuzen. En Arq werkt met snapshots zodat je bestanden die je hebt verwijderd ook gewoon nog kan terughalen.

[De clouddienst die ik bij voorkeur gebruik met Arq is B2](https://www.backblaze.com/b2/cloud-storage.html), een dienst van Backblaze. B2 werkt eigenlijk net als Amazon S3 maar dan veel eenvoudiger. Je betaalt ook enkel voor de ruimte die je in gebruik hebt en je kunt je data ook indelen in buckets als je dat wilt maar B2 heeft een veel eenvoudiger authenticatiesysteem dan S3 en ze zijn naar eigen zeggen ook goedkoper dan S3.

Arq draait als een menubar applicatie op mijn mac en maakt elk uur een backup van mijn belangrijkste mappen.

## Apple Time Machine

Ik heb een externe HD ([Samsung USB-C SSD](https://www.coolblue.nl/product/785051/samsung-portable-t5-1tb.html)) in twee stukken opgeknipt waarvan 1 deel dient als [Time Machine](https://support.apple.com/en-us/HT201250) drive. Die HD hang ik een paar keer per week aan mijn Mac en dat is voldoende om up-to-date te blijven. De meest belangrijke gegevens worden door de Arq + B2 combinatie vaker gebackupt, Time Machine is voor al het andere.

## iCloud

Al mijn projecten en documenten staan sowieso opgeslagen in iCloud zodat ik er op al mijn apparaten bij kan en bij het falen van mijn hardeschijf snel weer over mijn data kan beschikken.

Deze drie zaken zorgen er voor dat ik me geen zorgen maak over mijn data en dat ik bij een noodgeval snel alles terug kan vinden.
