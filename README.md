<div align="center">

# 📊 Dashboard de Equipe

Painel de gestão de equipe da **Minha Empresa**, uma empresa fictícia, feito em **Angular** para praticar a arquitetura que uso no dia a dia de trabalho.

<img src="https://img.shields.io/badge/status-em%20desenvolvimento-3178C6?style=flat-square" alt="Status: em desenvolvimento"/>
<img src="https://img.shields.io/badge/Angular-17.3-DD0031?style=flat-square&logo=angular&logoColor=white" alt="Angular 17.3"/>
<img src="https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5.4"/>
<img src="https://img.shields.io/badge/RxJS-7.8-B7178C?style=flat-square&logo=reactivex&logoColor=white" alt="RxJS 7.8"/>
<img src="https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white" alt="SCSS"/>

</div>

---

## 📌 Visão geral

O objetivo é reconstruir, do zero, um dashboard com três telas:

| Tela | O que mostra |
|---|---|
| **Funcionários** | Lista da equipe com cargo, status (online ou offline) e quantidade de tarefas |
| **Perfil** | Detalhes de um funcionário |
| **Tarefas** | Kanban com as tarefas da equipe |

O projeto é construído em partes, e cada parte só começa quando a anterior está funcionando na tela.

---

## 🗺️ Andamento

**Parte 1: esqueleto e tela de funcionários**

- [x] Projeto criado com NgModule, rotas e SCSS
- [x] Módulo de funcionários com componente, service e modelo (`IEmployee`)
- [x] Componente de funcionários aparecendo na tela inicial
- [x] Lista de funcionários vinda do service, com `Observable`
- [x] Cargo, status e contagem de tarefas com `*ngFor`, `ngClass` e ternário

**Parte 2: filtros e dados**

- [x] Filtros com Reactive Forms
- [ ] Dados vindos de uma API fake (`json-server`) com `HttpClient`
- [ ] Requisições combinadas com `forkJoin`

**Parte 3: navegação**

- [ ] Rotas e tela de perfil

**Parte 4: tarefas**

- [ ] Kanban de tarefas

---

## 🧠 Decisões técnicas

- **NgModule em vez de standalone.** O projeto foi criado com `--standalone=false` para seguir a mesma organização por módulos dos projetos Angular que mantenho no trabalho.
- **Código em inglês, textos da tela em português.** Por isso a funcionalidade se chama `employee`, mas a tela mostra "Funcionários".
- **Observable desde o primeiro passo.** Mesmo com dados fixos, o service já devolve um `Observable`, para que a troca por uma API de verdade na Parte 2 não mude quem consome o service.
- **Uma pasta por funcionalidade.** Componente, módulo e service ficam juntos, e o modelo fica em `shared/`.

---

## 📁 Estrutura

```text
src/app/
├── app.module.ts
├── app-routing.module.ts
├── app.component.*
└── employee/
    ├── employee.module.ts
    ├── employee.component.*
    ├── employee.service.ts
    └── shared/
        └── employee.ts      # modelo IEmployee
```

---

## ▶️ Como rodar

Requer **Node.js** e o **Angular CLI 17**.

```bash
git clone https://github.com/pinheiro-code/dashboard-equipe-angular.git
cd dashboard-equipe-angular
npm install
npm start
```

Depois é só abrir `http://localhost:4200`.

---

<div align="center">

Feito por **[Arthur Pinheiro](https://github.com/pinheiro-code)**

</div>
