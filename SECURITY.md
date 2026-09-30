# Política de segurança

Site estático (HTML/CSS/JS), sem backend, formulários, cookies ou dependências de terceiros.

## Reportar vulnerabilidade
Envie e-mail para feliperahn@gmail.com ou use *Security → Report a vulnerability* neste repositório. Não abra issue pública.

## Medidas em vigor
- CSP restritiva via `<meta>` (apenas recursos do próprio domínio; sem scripts/estilos inline).
- `referrer` restrito e links externos com `rel="noopener noreferrer"`.
- Fontes, imagens e vídeo hospedados localmente (sem CDN externa).
- `_headers` com cabeçalhos completos para hospedagens que os suportam.

## Checklist no GitHub (manual)
1. Settings → Code security: ativar Secret scanning, Push protection, Dependabot alerts.
2. Settings → Branches: proteger `main` (PR obrigatório, sem force-push).
3. Ativar 2FA na conta e, em Pages, marcar **Enforce HTTPS**.
4. Nunca versionar chaves, `.env` ou dados pessoais além dos já públicos no site.
