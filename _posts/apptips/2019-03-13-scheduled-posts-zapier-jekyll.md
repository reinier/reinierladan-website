---
layout: post
title:  "Scheduled posts met Jekyll en Zapier"
categories: web
tags: automation, jekyll, zapier
image: https://reinierladan.nl/assets/zapier-github.jpg
---

![Zapier triggers Github flow](https://reinierladan.nl/assets/zapier-github.jpg)

Het hebben van een static blog zoals [Hugo](https://gohugo.io) of [Jekyll](https://jekyllrb.com) is leuk maar zoiets ‘simpels’ als een artikel klaarzetten en het in de toekomst automatisch laten publiceren zit er standaard niet in. Met een beetje magie van [Zapier](https://zapier.com/) kom je gelukkig al een heel eind.

Zapier is een online dienst die andere diensten aan elkaar kan knopen. Zo kun je bijvoorbeeld [een Twitter-mention automatisch in een Google sheet laten zetten](https://zapier.com/apps/google-sheets/integrations/twitter). Zo hoef je niet naar de social slot machine die Twitter heet om toch je mentions te kunnen lezen.

En via Zapier kun je ook praten met Github. Zo kan Zapier [een pull request maken van een bepaalde vooraf ingestelde branch en deze mergen met de master branch](https://zapier.com/apps/github/integrations/schedule) als er geen conflicten optreden. Dit kun je op bepaalde intervallen laten uitvoeren. De trigger in Zapier is dan geen andere dienst maar Zapier zelf die periodiek zegt dat de actie moet plaatsvinden.

En zo kun je dus een post klaarzetten in bijvoorbeeld de `new-publications` branch en deze elke ochtend laten mergen met master zodat je hostingpartij (bijvoorbeeld Netlify) de verandering kan oppikken en een nieuwe website voor je klaarzet. 