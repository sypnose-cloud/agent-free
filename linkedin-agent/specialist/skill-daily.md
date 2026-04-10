# skill: daily

## Overview
Rutina diaria completa del agente LinkedIn de Carlos. Ejecutar cada mañana al iniciar sesión. Cubre: estado del sistema, noticias AI, post del día, contactos, y engagement. Tiempo total estimado: 2-3 horas.

## Cuándo activar
- Al inicio de cada sesión (comando /daily)
- Cuando Carlos dice "arranca" o "qué toca hoy"

## Pre-requisitos
```
□ Chrome abierto con sesión LinkedIn activa
□ Chrome CDP activo: chrome.exe --remote-debugging-port=9222
□ Verificar: curl http://localhost:9222/json/version
□ SSH tunnel activo (si se usa knowledge-hub o CLIProxy)
```

## Paso 1 — Estado del sistema (5 min)
```
1. Leer .brain/task.md → ¿hay tarea pendiente de ayer?
2. Si hay pendiente → CONTINUAR antes de rutina daily
3. Leer data/metricas.json → impressions de último post
4. Leer data/contactos.json → cuántos pending, cuántos connected

Reporte a Carlos (3 líneas):
  AYER: [qué se hizo, métricas concretas]
  HOY:  [qué toca según plan]
  RECOMIENDO: [1 acción prioritaria]
```

## Paso 2 — Noticias AI (15 min)
```
Búsquedas paralelas:
  WebSearch("Claude Anthropic news today")
  WebSearch("AI agents production news 2026")
  WebSearch("multi-agent orchestration news")

Criterio de selección:
  ✓ Publicada en últimas 24h
  ✓ >50 reactions en LinkedIn o trending en X
  ✓ Relevante para orquestación de agentes / LLMs
  ✗ No política, no hype genérico, no noticias de empresa no técnica

Output:
  TOP 1 noticia → ángulo para post
  Guardar en data/noticias.json con relevancia_sypnose
```

## Paso 3 — Post del día (30 min)
```
Si hay draft en content/posts/ → revisarlo con brand-voice
Si no hay draft → crear uno con la noticia seleccionada:

  1. sypnose-linkedin skill → seleccionar ángulo
  2. content-engine skill → redactar post
  3. brand-voice skill → verificar voz
  4. canva MCP → crear imagen (#eeece2 fondo)
  5. Guardar en content/posts/YYYY-MM-DD-titulo.md
  6. PARAR → presentar a Carlos para aprobación

IMPORTANTE: No publicar sin OK de Carlos (Boris Law 5)
Carlos puede publicar a las 14:00 CEST para golden hour España
```

## Paso 4 — Contactos (60 min)
```
Sub-paso A — Revisar aceptados (10 min):
  playwright MCP → linkedin.com/mynetwork/invitation-manager/
  → ¿Quién aceptó desde ayer?
  → Actualizar data/contactos.json status "pending" → "connected"
  → HOTs conectados → mover a lead-intelligence pipeline

Sub-paso B — Nuevos contactos si hay cupo (10 min):
  Verificar: ¿cuántos enviados hoy? (max 100/día)
  Si <80 enviados → enviar hasta llegar a 80-100
  Script CDP o visita directa a perfiles HOT de la lista

Sub-paso C — Engagement en posts de red (20 min):
  data-scraper-agent → buscar 5 posts virales #AIAgents
  Comentar 5 posts (ver linkedin-growth para criterios)
  Cada comentario: técnico, con experiencia real, >50 palabras
  Guardar posts comentados en .brain/task.md
```

## Paso 5 — Cierre y reporte (10 min)
```
Actualizar .brain/task.md con:
  DONE: [qué se ejecutó hoy con evidencia]
  MÉTRICAS: [impressions, conexiones, comentarios]
  MAÑANA: [post preparado, contactos en cola]

Guardar en data/metricas.json:
  - Posts publicados y métricas
  - Conexiones enviadas/aceptadas del día
  - Posts comentados y autores

Preguntas al cierre (Boris):
  ¿Hay oportunidades que no se aprovecharon?
  ¿Algún contacto HOT que requiere seguimiento?
  ¿El post de mañana está listo?
```

## Checklist diario completo
```
□ Estado sistema leído (.brain/task.md)
□ Noticia AI seleccionada
□ Post draft creado o revisado
□ Imagen creada (si aplica)
□ Post presentado a Carlos para aprobación
□ Contactos aceptados actualizados en JSON
□ 60-100 conexiones enviadas (si cupo)
□ 5 posts virales comentados
□ .brain/task.md actualizado
□ data/metricas.json actualizado
```

## Variaciones por día de la semana
```
Lunes:
  + Revisar métricas de la semana pasada
  + Planificar calendario de 3 posts para la semana

Martes-Jueves:
  Rutina completa (días de mayor engagement)
  + Publicar post si está aprobado (14:00 CEST)

Viernes:
  + Resumen semanal para .brain/history.md
  + Identificar leads calientes de la semana

Fin de semana:
  Opcional: solo monitoreo, no publicar
  Engagement orgánico (responder comentarios si hay)
```

## Métricas de éxito diarias
```
Mínimo aceptable:
  ✓ 1 noticia analizada
  ✓ 1 post draft creado o revisado
  ✓ 50+ conexiones enviadas
  ✓ 5 posts comentados

Bueno:
  ✓ Todo lo anterior
  ✓ Post publicado con imagen
  ✓ 1 HOT investigado con deep-research
  ✓ Golden hour monitoreado (si hubo publicación)

Excelente:
  ✓ Todo lo anterior
  ✓ Crosspost a X
  ✓ 1 lead HOT en conversación
  ✓ Calendario semanal actualizado
```

## Historial de rutinas ejecutadas
- 2026-04-09: primera rutina completa (posts, comentarios virales)
- 2026-04-13: engagement 4 posts virales (Pascal Bornet 354 reactions)
- 2026-04-14: 8 conexiones CDP + 5 comentarios técnicos
- 2026-04-15: 100 conexiones + arsenal specialist subido a GitHub
