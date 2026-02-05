# 🚀 Guia Completo: Enviar Código para GitHub

**Username GitHub**: `rfs-pharm`  
**Status**: Código preparado e pronto para push

---

## ✅ JÁ ESTÁ FEITO

- ✅ Git inicializado
- ✅ Todos os ficheiros adicionados
- ✅ Commit criado
- ✅ Código pronto para enviar

---

## 📋 PASSOS PARA CRIAR O REPOSITÓRIO

### Passo 1: Criar Repositório no GitHub

1. Acesse: **https://github.com/new**
2. Preencha:
   - **Repository name**: `academic-website` (ou o nome que preferir)
   - **Description**: `Professional academic website - FMUP`
   - **Visibilidade**: 
     - 🔒 **Private** (recomendado - só você vê)
     - 🌐 **Public** (qualquer pessoa pode ver)
3. **NÃO marque** "Initialize this repository with a README"
4. Clique em **"Create repository"**

### Passo 2: Copiar URL do Repositório

Após criar, o GitHub mostrará uma página com comandos.  
Copie o URL que aparece, algo como:

```
https://github.com/rfs-pharm/academic-website.git
```

---

## 💻 COMANDOS PARA EXECUTAR

### No seu terminal/servidor atual:

```bash
cd /app

# Adicionar o repositório remoto (use o URL que copiou)
git remote add origin https://github.com/rfs-pharm/academic-website.git

# Renomear branch para main
git branch -M main

# Enviar código para GitHub
git push -u origin main
```

### Se pedir autenticação:

O GitHub vai pedir login. Use:
- **Username**: `rfs-pharm`
- **Password**: Use um **Personal Access Token** (não a password normal)

---

## 🔑 Como Criar Personal Access Token

1. Vá a: **https://github.com/settings/tokens**
2. Clique em **"Generate new token"** → **"Classic"**
3. Nome: `Academic Website Deploy`
4. Selecione:
   - ✅ `repo` (todos os sub-items)
5. Clique **"Generate token"**
6. **COPIE O TOKEN** (só aparece uma vez!)
7. Use este token como password no git push

---

## 🎯 RESUMO DOS COMANDOS (Copie e Cole)

```bash
# 1. Ir para pasta do projeto
cd /app

# 2. Adicionar repositório GitHub (SUBSTITUA pela sua URL)
git remote add origin https://github.com/rfs-pharm/academic-website.git

# 3. Enviar código
git branch -M main
git push -u origin main
```

---

## ✅ VERIFICAÇÃO

Após fazer o push, vá a:
```
https://github.com/rfs-pharm/academic-website
```

Você deve ver:
- ✅ Pastas: `backend/`, `frontend/`, etc.
- ✅ Arquivos: `README.md`, `package.json`, etc.
- ✅ Commit: "Academic Website - FMUP - Complete codebase with CMS"

---

## 🔄 ATUALIZAÇÕES FUTURAS

Sempre que fizer alterações:

```bash
cd /app
git add .
git commit -m "Descrição das alterações"
git push
```

---

## 🆘 PROBLEMAS COMUNS

### Erro: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/rfs-pharm/academic-website.git
```

### Erro: "Authentication failed"
- Use Personal Access Token (não password)
- Gere novo token se necessário

### Erro: "Permission denied"
- Verifique se o repositório existe
- Confirme que está logado como `rfs-pharm`

---

## 📞 PRECISA DE AJUDA?

Se encontrar algum problema, me informe e posso:
1. Criar arquivo ZIP do código
2. Fornecer comandos alternativos
3. Guiá-lo passo a passo

---

## 🎉 DEPOIS DE FAZER PUSH

Seu código estará seguro no GitHub e você poderá:
- ✅ Ver histórico completo de alterações
- ✅ Fazer download de qualquer versão
- ✅ Migrar para qualquer plataforma (Vercel, Netlify, etc.)
- ✅ Colaborar com outros desenvolvedores
- ✅ Ter backup automático

---

**Última atualização**: 5 Fevereiro 2025  
**Status**: Código preparado e pronto para push
