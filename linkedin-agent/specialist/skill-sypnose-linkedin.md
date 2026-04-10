# skill: sypnose-linkedin

## Overview
Pilares de contenido Sypnose para LinkedIn. Define qué publicar, qué ángulos usar, y cómo conectar cada noticia del ecosistema AI con la narrativa Sypnose. El objetivo no es vender, es mostrar trabajo real que atrae clientes.

## Cuándo activar
- Al seleccionar el tema del post del día
- Al encontrar una noticia de AI relevante
- Al preparar el calendario semanal de contenido

## Los 3 pilares de contenido (60/20/20)
```
60% — Thought Leadership
      Opinión técnica sobre noticias AI
      Reflexiones sobre orquestación de agentes
      Lecciones aprendidas en producción

20% — Building in Public
      Progreso real del sistema Sypnose
      Métricas actualizadas (latencia, uptime, coste)
      Errores y cómo se resolvieron

20% — Sypnose directo
      Features específicas de Sypnose
      Comparativas con arquitecturas populares
      Casos de uso concretos de clientes
```

## Ángulos virales (10 probados)
| Ángulo | Ejemplo de hook | Engagement esperado |
|--------|----------------|---------------------|
| Números precisos | "9 agents. 741ms. Zero supervision." | Muy alto |
| Contrarian | "Why I stopped using LangChain" | Alto |
| Before/After | "What took 2 weeks now runs in 741ms" | Alto |
| Transparencia | "Our production costs: $X/month" | Muy alto |
| Error admission | "We got it wrong. Here's what we learned" | Alto |
| Comparativa | "Agent-free vs LangGraph: real numbers" | Medio-alto |
| Tutorial técnico | "How to build A2A latency under 1s" | Medio |
| Predicción | "In 6 months, most AI teams will..." | Medio |
| Stack reveal | "Our entire AI stack, free vs paid" | Muy alto |
| Case study | "How we served 314 clients with 23 containers" | Alto |

## Conexión noticia → Sypnose (flujo diario)
```
1. WebSearch "Claude Anthropic news today" + "AI agents news"
2. Seleccionar noticia con >100 reactions en LinkedIn
3. Extraer el ángulo técnico relevante
4. Conectar con experiencia Sypnose real:
   - Si es sobre latencia → "En Sypnose: 741ms A2A"
   - Si es sobre costes → "47 modelos, 95% gratis"
   - Si es sobre control → "Boris: 5 leyes de hierro"
   - Si es sobre escala → "23 containers, 314 clientes"
5. Redactar con brand-voice (ver skill-brand-voice.md)
6. Guardar en content/posts/YYYY-MM-DD-titulo.md
```

## Datos reales Sypnose — usar siempre concretos
```yaml
sistema:
  agentes: 9 en producción
  latencia_a2a: 741ms
  modelos: 47 disponibles (95% gratis)
  docker: 23 containers
  productos: 5 en producción
  clientes: 314

costes:
  meta: 80%+ trabajo con modelos GRATIS
  modelos_gratis: [qwen3-coder-plus, gemini-2.5-flash, deepseek-v3.2]
  modelo_pago: claude-sonnet-4-6 (solo contenido crítico)

calidad:
  sistema: Boris (5 leyes de hierro)
  evidencia: sin evidencia = no existe
  supervision: zero supervision en producción
```

## Target por rol (qué le interesa a cada uno)
| Rol | Pain point | Ángulo Sypnose |
|-----|-----------|----------------|
| CTO/CIO | Escalabilidad, costes infra | "23 containers, 95% gratis" |
| Head of AI | Orquestación, calidad | "9 agentes, Boris quality gate" |
| AI Engineer | Latencia, arquitectura | "741ms A2A, código real" |
| VC/Investor | Tracción, mercado | "314 clientes, 5 productos" |
| Founder | Time-to-market | "Lo que tardaba 2 semanas, ahora 741ms" |

## Regla narrativa Sypnose (IMPORTANTE)
```
NUNCA: "Sypnose es el mejor framework de IA"
NUNCA: "Nuestros clientes están encantados"
NUNCA: ventas directas, CTAs agresivos

SIEMPRE: "En Sypnose corremos 9 agentes en producción..."
SIEMPRE: datos reales verificables
SIEMPRE: "El repo es público: github.com/radelqui/sypnose"
SIEMPRE: mostrar el trabajo, dejar que hable solo
```

## Hashtags por categoría
```
Core (siempre): #AIAgents #Claude #Sypnose
Técnicos: #MultiAgent #LLMOps #AgentOrchestration
Audiencia: #AI #Automation #MLOps
Evitar: #Tech #Innovation #Future (demasiado genéricos)
```

## Posts referencia (estilo correcto)
- Boris viral: voz correcta, builder directo, datos reales
- "47 models 95% free": ángulo economía de modelos, números precisos
- "Claude Managed Agents vs Sypnose": comparativa directa, sin arrogancia
- "Dream Memory": reflexión técnica, menos datos pero thoughtful

## Acciones diarias LinkedIn (rutina mínima)
```
09:00 (RD) — Comentar 5 posts virales:
  Búsqueda: "#AIAgents OR #Claude OR #MultiAgent"
  Filtro: >50 reactions, últimas 24h
  Comentario: técnico, propositivo, con experiencia real
  Prohibido: "Great post!", "Totally agree!", genérico

14:00 (CEST) — Publicar post si hay uno preparado

Monitoreo golden hour: responder todos los comentarios en 60 min
```
