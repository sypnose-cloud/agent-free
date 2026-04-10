---
name: linkedin-connect
description: Conectar automaticamente con personas en LinkedIn via Chrome CDP. Busca AI Engineers, LLM, agents, ML en España y LATAM. Requiere Chrome abierto con debugging en puerto 9222.
---

# LinkedIn Auto-Connect

## USO
`/linkedin-connect [cantidad] [region]`

Ejemplos:
- `/linkedin-connect 100` — 100 conexiones en España (default)
- `/linkedin-connect 50 latam` — 50 conexiones en LATAM
- `/linkedin-connect 200 all` — 200 conexiones en todas las regiones

## REQUISITOS
1. Chrome abierto con `--remote-debugging-port=9222`
2. LinkedIn logueado en ese Chrome
3. Si Chrome no esta abierto: `start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir="C:\Users\carlo\chrome-debug-profile"`

## QUE HACE
1. Verifica Chrome CDP en puerto 9222
2. Busca personas por keywords en LinkedIn (AI Engineer, LLM, agents, ML, etc.)
3. Filtra por region (España, Sudamerica, Mexico, Colombia, Argentina)
4. Hace click en "Conectar" automaticamente sin nota
5. Reporta progreso en tiempo real

## EJECUTAR
Ejecutar el script: `python C:\Carlos\linkedin-connect2.py`

Para cambiar target o regiones, editar las variables `TARGET`, `searches` y `geos` en el script.

## REGIONES DISPONIBLES
| Region | GeoUrn |
|--------|--------|
| España | 105646813 |
| Sudamerica | 104514572 |
| Mexico | 101174742 |
| Colombia | 100876405 |
| Argentina | 100446943 |

## KEYWORDS DE BUSQUEDA
- AI Engineer / AI Engineer agents
- Machine learning engineer
- LLM engineer / multi-agent systems
- Claude developer / Anthropic developer
- AI solutions architect / AI orchestration
- AI automation engineer / AI startup
- MLOps engineer / NLP engineer
- Data scientist AI / Computer vision engineer
- Deep learning engineer

## LIMITES LINKEDIN
- Max ~100 conexiones/dia sin riesgo de bloqueo
- Si LinkedIn pide CAPTCHA, parar y esperar 24h
- No enviar mas de 200/semana

## HISTORIAL
- 23-Mar-2026: 100 conexiones España (0 errores)
- 30-Mar-2026: 100 conexiones España (0 errores) — fix: drain CDP events + 10s wait
