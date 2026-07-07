# ⚡ Quick Reference: Kas Langgar An-Nikmah

## 📋 Tech Stack Summary

| Layer | Technology | Version |
|-------|-----------|---------|
| **Backend** | NestJS + TypeScript | 10.x |
| **Database** | MySQL + Prisma ORM | 8.0+ |
| **Frontend** | Vue.js 3 + TypeScript | 3.x |
| **UI Framework** | Material UI (Vue) | Latest |
| **State Management** | Pinia | 2.x |
| **HTTP Client** | Axios | 1.x |
| **Authentication** | JWT + Passport.js | - |
| **Validation** | class-validator | - |
| **Documentation** | Swagger/OpenAPI | - |

---

## 🚀 Setup Commands (Copy-Paste Ready)

### Backend Setup
```bash
# 1. Create & setup NestJS
npm i -g @nestjs/cli
nest new kas-langgar-backend
cd kas-langgar-backend

# 2. Install dependencies
npm install @nestjs/jwt @nestjs/passport @nestjs/typeorm
npm install @prisma/client prisma passport-jwt bcrypt
npm install class-validator class-transformer mysql2
npm install @nestjs/config @nestjs/swagger swagger-ui-express
npm install -D @types/bcrypt

# 3. Setup Prisma
npx prisma init

# 4. Create environment file
echo 'DATABASE_URL="mysql://root:password@localhost:3306/kas_langgar"' > .env
echo 'JWT_SECRET="your-super-secret-key-here"' >> .env
echo 'PORT=3000' >> .env
```

### Frontend Setup
```bash
# 1. Create Vite + Vue
npm create vite@latest kas-langgar-frontend -- --template vue-ts
cd kas-langgar-frontend

# 2. Install dependencies
npm install
npm install @vue/material @emotion/react @emotion/styled
npm install axios pinia vue-router chart.js vue-chartjs
npm install vee-validate yup dayjs

# 3. Start dev server
npm run dev
# Frontend: http://localhost:5173
# Backend: http://localhost:3000
```

---

## 📁 Folder Structure

### Backend Modules
```
src/
├── auth/          → Login/Register/JWT
├── users/         → User CRUD (Admin)
├── transactions/  → Kas Masuk/Keluar CRUD
├── reports/       → Monthly/Yearly Summary
├── prisma/        → Database Connection
└── common/        → Guards, Decorators, Utils
```

### Frontend Sections
```
src/
├── pages/         → Full page components
├── components/    → Reusable components
├── stores/        → Pinia state management
├── services/      → API calls to backend
├── router/        → Vue Router config
└── utils/         → Helper functions
```

---

## 🔑 API Endpoints (Cheat Sheet)

### Authentication
```
POST   /auth/register          Register user baru
POST   /auth/login             Login & dapatkan JWT token
```

### Users (ADMIN only)
```
GET    /users                  List semua user
GET    /users/:id              Get user by ID
POST   /users                  Create user baru
PATCH  /users/:id              Update user info
DELETE /users/:id              Delete user (soft delete)
```

### Transactions (BENDAHARA/ADMIN create, PENGURUS view)
```
GET    /transactions           List with filter & pagination
GET    /transactions/:id       Get transaction by ID
POST   /transactions           Create transaction
PATCH  /transactions/:id       Update transaction
DELETE /transactions/:id       Delete transaction
GET    /transactions/summary/monthly/:month/:year  Monthly summary
```

### Reports (Everyone can view)
```
GET    /reports/monthly/:month/:year         Monthly summary
GET    /reports/yearly/:year                 Yearly with breakdown
GET    /reports/category-breakdown           Breakdown by category
```

---

## 🔐 Authorization Model (RBAC)

| Feature | ADMIN | BENDAHARA | PENGURUS |
|---------|-------|-----------|----------|
| Create Transaction | ✅ | ✅ | ❌ |
| Edit Own Transaction | ✅ | ✅ | ❌ |
| Delete Own Transaction | ✅ | ✅ | ❌ |
| View All Transactions | ✅ | ✅ | ✅ |
| View Reports | ✅ | ✅ | ✅ |
| Manage Users | ✅ | ❌ | ❌ |
| Change User Role | ✅ | ❌ | ❌ |

---

## 📊 Database Schema

### Users Table
```
id (PK)
email (UNIQUE)
password (hashed)
name
role (ADMIN, BENDAHARA, PENGURUS)
isActive (Boolean)
createdAt
updatedAt
```

### Transactions Table
```
id (PK)
date
type (INCOME, EXPENSE)
amount (Decimal 15,2)
description
category
createdBy (FK → users.id)
createdAt
updatedAt
```

---

## 🧪 Test Data (Seed untuk Testing)

```sql
-- User: Admin
INSERT INTO users VALUES (1, 'admin@langgar.com', '$2b$10$...', 'Admin', 'ADMIN', 1, NOW(), NOW());

-- User: Bendahara
INSERT INTO users VALUES (2, 'bendahara@langgar.com', '$2b$10$...', 'Bendahara', 'BENDAHARA', 1, NOW(), NOW());

-- User: Pengurus
INSERT INTO users VALUES (3, 'pengurus@langgar.com', '$2b$10$...', 'Pengurus', 'PENGURUS', 1, NOW(), NOW());

-- Sample Transactions
INSERT INTO transactions VALUES 
(1, '2026-07-01', 'INCOME', 500000.00, 'Shodaqoh Pak Ahmad', 'Shodaqoh', 2, NOW(), NOW()),
(2, '2026-07-02', 'EXPENSE', 200000.00, 'Biaya Operasional', 'Operasional', 2, NOW(), NOW());
```

---

## 🔗 JWT Token Structure

Setelah login, dapatkan token seperti ini:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "User Name",
    "role": "ADMIN"
  }
}
```

**Cara pakai di request:**
```
Headers:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 🎨 Vue.js Component Structure

### Login Component
```
LoginPage.vue
├── Form: email, password
├── Submit button
├── Error message display
└── Store: authStore.login()
```

### Dashboard Component
```
DashboardPage.vue
├── Balance Card (total saldo)
├── Income/Expense Summary
├── Recent Transactions Table
├── Monthly Chart
└── Store: transactionStore, reportStore
```

### Transaction Form Component
```
TransactionForm.vue (reusable)
├── Date picker
├── Type select (INCOME/EXPENSE)
├── Amount input
├── Category select
├── Description textarea
├── Submit button
└── Emit events: submit, cancel
```

---

## ⚙️ Environment Configuration

### Backend (.env)
```env
# Database
DATABASE_URL="mysql://root:password@localhost:3306/kas_langgar"

# JWT
JWT_SECRET="your-super-secret-key-12345-change-this"
JWT_EXPIRATION="7d"

# Server
PORT=3000
NODE_ENV=development

# CORS (untuk frontend)
CORS_ORIGIN="http://localhost:5173"
```

### Frontend (.env)
```env
# API
VITE_API_BASE_URL=http://localhost:3000/api/v1

# App
VITE_APP_NAME=Kas Langgar An-Nikmah
VITE_APP_VERSION=1.0.0
```

---

## 🐛 Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| `Cannot find module '@nestjs/...'` | Dependencies not installed | `npm install` |
| `MySQL connection refused` | MySQL not running | Start MySQL service |
| `JWT token invalid` | Token expired atau secret mismatch | Refresh login |
| `CORS error` | Frontend origin not in whitelist | Add origin di app.module.ts |
| `Validation error 400` | Invalid DTO data | Check request body format |
| `Role not found` | RolesGuard not imported | Import RolesGuard di module |

---

## 📈 Development Workflow

### Day 1-2: Backend Setup
- [ ] Setup NestJS project
- [ ] Setup Prisma & MySQL
- [ ] Create Auth module
- [ ] Test login/register dengan Postman

### Day 3-4: Backend Features
- [ ] User management (CRUD)
- [ ] Transaction CRUD
- [ ] Reports module
- [ ] Test all endpoints

### Day 5-6: Frontend Setup
- [ ] Setup Vue.js + Vite
- [ ] Create router & pages
- [ ] Setup Pinia stores
- [ ] Create API services

### Day 7-8: Frontend Features
- [ ] Login/Register page
- [ ] Dashboard with stats
- [ ] Transaction CRUD pages
- [ ] Reports & charts

### Day 9+: Polish & Testing
- [ ] UI refinement
- [ ] Error handling
- [ ] User testing
- [ ] Deployment setup

---

## 🚢 Deployment Checklist

### Before Production
- [ ] Update `.env` dengan production values
- [ ] Enable HTTPS
- [ ] Setup MySQL on server
- [ ] Change JWT_SECRET ke value yang aman
- [ ] Enable rate limiting
- [ ] Setup logging
- [ ] Test all features

### Backend Deployment (Railway/Heroku)
```bash
# Build Docker image
docker build -t kas-langgar-backend .

# Deploy ke Railway
railway link
railway up
```

### Frontend Deployment (Vercel/Netlify)
```bash
# Build production
npm run build

# Deploy (automatic via git push)
git push origin main
```

---

## 📚 Additional Resources

- **NestJS Docs:** https://docs.nestjs.com
- **Prisma Docs:** https://www.prisma.io/docs
- **Vue 3 Guide:** https://vuejs.org/guide/
- **Pinia Documentation:** https://pinia.vuejs.org
- **Material UI Vue:** https://www.materialui.org/vue/

---

## 💡 Tips & Best Practices

1. **Always validate input** di backend (class-validator)
2. **Use DTOs** untuk request/response consistency
3. **Implement proper error handling** dengan custom exceptions
4. **Test API** dengan Postman before frontend integration
5. **Use environment variables** untuk sensitive data
6. **Log important events** untuk debugging
7. **Implement pagination** untuk large datasets
8. **Cache reports** jika query heavy
9. **Use TypeScript** strict mode untuk type safety
10. **Document API** dengan Swagger/OpenAPI

---

## 📞 Getting Help

Jika stuck:
1. Check error message di terminal
2. Look at stack trace details
3. Search di StackOverflow dengan exact error
4. Check NestJS/Vue.js documentation
5. Review code comments di prompt

**Happy Coding! 🚀**
