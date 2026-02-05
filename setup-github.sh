#!/bin/bash

# Script para criar repositório GitHub e fazer push do código
# Para usar: bash setup-github.sh

echo "🚀 Configurando repositório GitHub para rfs-pharm"
echo ""

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Verificar se git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git não está instalado. Por favor instale primeiro."
    exit 1
fi

echo "${BLUE}Passo 1:${NC} Inicializando repositório Git..."
git init

echo ""
echo "${BLUE}Passo 2:${NC} Configurando Git..."
git config user.name "Renato Ferreira da Silva"
git config user.email "rsilva@med.up.pt"

echo ""
echo "${BLUE}Passo 3:${NC} Adicionando ficheiros..."
git add .

echo ""
echo "${BLUE}Passo 4:${NC} Criando commit inicial..."
git commit -m "Initial commit - Academic Website FMUP"

echo ""
echo "${GREEN}✅ Repositório local criado com sucesso!${NC}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 PRÓXIMOS PASSOS:"
echo ""
echo "1. Vá a: https://github.com/new"
echo "2. Repository name: academic-website"
echo "3. Description: Professional academic website - FMUP"
echo "4. Escolha: Private (recomendado) ou Public"
echo "5. NÃO marque 'Initialize with README'"
echo "6. Clique 'Create repository'"
echo ""
echo "7. Depois execute estes comandos:"
echo ""
echo "   git remote add origin https://github.com/rfs-pharm/academic-website.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "${GREEN}✨ Código está pronto para ser enviado para o GitHub!${NC}"
