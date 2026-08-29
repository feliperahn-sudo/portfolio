# Versão estática — Luiz Felipe Rahn

Esta pasta pode ser publicada diretamente, sem Node.js e sem processo de build.

## GitHub Pages

1. Crie um repositório no GitHub.
2. Envie **todo o conteúdo desta pasta**, mantendo `index.html` na raiz.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Clique em **Save**.

O site funcionará porque todos os caminhos de mídia são relativos e todos os recursos estão incluídos localmente.

## Teste local

Você pode abrir `index.html` diretamente no navegador. Para simular um servidor:

```bash
python -m http.server 8080
```

Depois abra `http://localhost:8080`.
