# Guia de Edição do Site - Renato Ferreira da Silva

## Como Editar o Site

### 1. Ficheiros Principais

#### Páginas (Conteúdo)
Localizadas em: `/app/frontend/src/pages/`

- **HomePage.js** - Página inicial (foto, links, áreas de foco)
- **AboutPage.js** - Sobre (biografia, educação)
- **ResearchPage.js** - Investigação (áreas de pesquisa)
- **TeachingPage.js** - Ensino (áreas e programas)
- **ProjectsPage.js** - Projetos financiados
- **PublicationsPage.js** - Publicações
- **ContactPage.js** - Contactos

#### Traduções PT/EN
Ficheiro: `/app/frontend/src/contexts/LanguageContext.js`

Todas as traduções estão organizadas neste ficheiro:
```javascript
export const translations = {
  en: { ... },  // Inglês
  pt: { ... }   // Português
}
```

#### Componentes Reutilizáveis
- **Header.js** - Navegação superior (com logo FMUP)
- **Footer.js** - Rodapé (logos, links, contactos)

#### Dados de Publicações
Ficheiro: `/app/backend/data/publications.json`

### 2. Como Fazer Alterações Comuns

#### A. Adicionar/Editar Link Académico

Editar `/app/frontend/src/pages/HomePage.js`:
```javascript
const profileLinkGroups = [
  {
    title: t('home.identifiers'),
    links: [
      { name: 'ORCID', url: 'https://...' },
      // Adicionar novo link aqui
    ]
  }
];
```

#### B. Atualizar Informações de Contacto

Editar `/app/frontend/src/components/Footer.js` e `/app/frontend/src/pages/ContactPage.js`

#### C. Adicionar Projeto Financiado

Editar `/app/frontend/src/pages/ProjectsPage.js`:
```javascript
const fundedProjects = [
  {
    nameEN: 'Nome em Inglês',
    namePT: 'Nome em Português',
    code: 'CÓDIGO-DO-PROJETO',
    period: '2025 - Ongoing',
    // ... etc
  }
];
```

#### D. Atualizar Áreas de Investigação

Editar `/app/frontend/src/pages/ResearchPage.js`:
```javascript
const researchAreas = [
  'Drug safety',
  'Nova área aqui',
  // ...
];

const researchAreasPT = [
  'Segurança de medicamentos',
  'Nova área em PT',
  // ...
];
```

#### E. Adicionar/Remover Publicações

**Método 1: Edição Manual**
Editar `/app/backend/data/publications.json`:
```json
[
  {
    "title": "Título da Publicação",
    "authors": "Autor1, Autor2",
    "year": "2025",
    "journal": "Nome da Revista",
    "volume": "17",
    "issue": "6",
    "doi": "10.1234/exemplo",
    "url": "https://...",
    "doc_type": "Article",
    "citations": 3
  }
]
```

**Método 2: Refresh Automático do Authenticus**
```bash
curl -X POST https://seu-site.com/api/publications/refresh
```

### 3. Após Fazer Alterações

**Passo 1: Reiniciar os Serviços**

```bash
# Aceder ao container/servidor
sudo supervisorctl restart frontend backend
```

**Passo 2: Verificar Status**

```bash
sudo supervisorctl status
```

Deve ver:
```
frontend    RUNNING
backend     RUNNING
```

**Passo 3: Verificar Site**

Abrir navegador em: `http://localhost:3000` ou URL de produção

### 4. Estrutura de Traduções

Exemplo de como adicionar uma nova tradução:

```javascript
// Em /app/frontend/src/contexts/LanguageContext.js

export const translations = {
  en: {
    projects: {
      title: 'Projects & Networks',
      // Adicionar nova chave aqui
      newSection: 'New Section Title'
    }
  },
  pt: {
    projects: {
      title: 'Projetos & Redes',
      // Adicionar tradução PT aqui
      newSection: 'Novo Título da Secção'
    }
  }
}
```

Depois usar na página:
```javascript
<h2>{t('projects.newSection')}</h2>
```

### 5. Troubleshooting

#### Problema: Alterações não aparecem
**Solução**: 
```bash
sudo supervisorctl restart frontend
# Limpar cache do navegador (Ctrl+Shift+R)
```

#### Problema: Erro ao reiniciar
**Solução**: Ver logs
```bash
tail -n 100 /var/log/supervisor/frontend.err.log
tail -n 100 /var/log/supervisor/backend.err.log
```

#### Problema: Sintaxe JSON inválida
**Solução**: Validar JSON online (jsonlint.com) antes de guardar

### 6. Backup Antes de Editar

**Sempre faça backup antes de alterações importantes:**

```bash
# Backup da pasta frontend
cp -r /app/frontend /app/frontend_backup_$(date +%Y%m%d)

# Backup de ficheiro específico
cp /app/frontend/src/pages/HomePage.js /app/frontend/src/pages/HomePage.js.bak
```

### 7. Comandos Úteis

```bash
# Ver estrutura de ficheiros
ls -la /app/frontend/src/pages/

# Procurar texto em ficheiros
grep -r "texto a procurar" /app/frontend/src/

# Ver diferenças entre versões
diff ficheiro_original.js ficheiro_editado.js

# Reiniciar apenas frontend
sudo supervisorctl restart frontend

# Reiniciar apenas backend
sudo supervisorctl restart backend

# Ver todos os serviços
sudo supervisorctl status
```

### 8. Dicas de Segurança

1. **Nunca commitar credenciais** nos ficheiros de código
2. **Usar variáveis de ambiente** para dados sensíveis
3. **Fazer backup regular** dos dados importantes
4. **Testar localmente** antes de aplicar em produção

---

## Alterações Recentes Implementadas

### ✅ Concluído (5 Feb 2025)

1. **Logo FMUP** adicionado no header e footer
2. **Links académicos reorganizados** por categoria:
   - Research Identifiers (ORCID, Scopus, Web of Science)
   - Academic Platforms (CIÊNCIAVITAE, Authenticus, Google Scholar)
   - Professional Networks (ResearchGate, LinkedIn)
3. **Research simplificado** - apenas lista de áreas, sem descrições longas
4. **Teaching atualizado** - áreas identificadas do CV
5. **Projects** - apenas projetos financiados com códigos, orçamentos, períodos
6. **Contactos atualizados**:
   - Rua Doutor Plácido da Costa, 4200-450 Porto
   - Phone: (+351) 220 426 913, Ext: 26913
7. **Footer completo** com FMUP logo, unidades de investigação, contactos
8. **Google Scholar** adicionado aos perfis académicos

### 🔄 Por Fazer

1. **Integração de publicações** de múltiplas fontes (Scopus, PubMed, WoS, Authenticus)
2. **URL personalizado** com nome (deploy/domain configuration)
3. **Publicações adicionais** mencionadas pelo utilizador

---

## Contacto para Suporte

Para questões técnicas ou ajuda com edições mais complexas, contactar o administrador do sistema.
