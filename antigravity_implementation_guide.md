# 📖 Panduan Lengkap: Menggunakan Prompt di Antigravity IDE

## 🎯 Apa itu Antigravity IDE?

Antigravity IDE adalah AI-powered development tool yang membantu Anda membuat kode dengan cepat menggunakan prompts. Anda bisa:
- ✅ Paste prompt ke Antigravity
- ✅ AI akan generate code berdasarkan prompt
- ✅ Review code dan customize sesuai kebutuhan
- ✅ Execute/run code langsung

---

## 📥 Cara Menggunakan Prompt untuk Kas Langgar

### STEP 1: Buka Antigravity IDE

1. Buka browser
2. Buka **antigravity.dev** (atau aplikasi Antigravity jika sudah install)
3. Create project baru atau buka existing project

---

### STEP 2: Mulai dengan Backend (NestJS)

#### Langkah 2.1: Create Backend Project
```
Prompt ke Antigravity:

"Buatkan struktur project NestJS untuk Kas Langgar dengan:
- Prisma ORM untuk MySQL
- JWT Authentication
- Role-based access control (ADMIN, BENDAHARA, PENGURUS)
- Module structure: auth, users, transactions, reports

Saya ingin:
1. Folder structure yang rapi
2. File konfigurasi (.env, tsconfig, package.json)
3. Prisma schema untuk users dan transactions
4. BaseAuth module dengan login/register"
```

Antigravity akan generate:
- ✅ Folder structure
- ✅ Package.json dengan dependencies
- ✅ Prisma schema
- ✅ Auth module files

#### Langkah 2.2: Setup Prisma & Database
```
Prompt:

"Buatkan Prisma configuration dan schema untuk Kas Langgar dengan:

DATABASE SCHEMA:
1. User table:
   - id, email (unique), password (hashed), name
   - role (ADMIN, BENDAHARA, PENGURUS)
   - isActive, createdAt, updatedAt

2. Transaction table:
   - id, date, type (INCOME/EXPENSE)
   - amount (decimal), description, category
   - createdBy (FK to user), createdAt, updatedAt

REQUIREMENTS:
- Mysql database
- Proper indexes untuk performa
- Cascade delete untuk relasi
- Timestamps otomatis

Generate:
1. prisma/schema.prisma (lengkap dengan dokumentasi)
2. prisma/.env.example
3. Prisma migration commands"
```

#### Langkah 2.3: Auth Module
```
Prompt:

"Buatkan Auth Module NestJS yang lengkap:

FEATURES:
1. User registration dengan email & password
2. User login dengan JWT token
3. Password hashing dengan bcrypt
4. JWT validation strategy

FILES NEEDED:
1. auth.service.ts - register() & login() methods
2. auth.controller.ts - /auth/register & /auth/login endpoints
3. jwt.strategy.ts - JWT validation
4. auth.module.ts - Module configuration
5. DTOs: LoginDto, RegisterDto, AuthResponseDto

DETAILS:
- Password hash dengan salt rounds 10
- JWT expire dalam 7 hari
- Include user info dalam token
- Error handling untuk invalid credentials"
```

#### Langkah 2.4: User Management
```
Prompt:

"Buatkan User Management Module untuk NestJS:

ENDPOINTS (ADMIN ONLY):
1. GET /users - List all active users
2. GET /users/:id - Get user by ID
3. POST /users - Create user (admin creates)
4. PATCH /users/:id - Update user (name, role, isActive)
5. DELETE /users/:id - Soft delete (set isActive = false)

FILES NEEDED:
1. users.service.ts - All CRUD operations
2. users.controller.ts - All endpoints
3. DTOs: CreateUserDto, UpdateUserDto, UserResponseDto
4. users.module.ts

REQUIREMENTS:
- Prevent duplicate email
- Validate role field
- Return user tanpa password
- Only ADMIN bisa akses
- Authorization check di guard"
```

#### Langkah 2.5: Transaction CRUD
```
Prompt:

"Buatkan Transaction Management Module:

ENDPOINTS:
1. POST /transactions - Create transaksi
2. GET /transactions - List dengan filter & pagination
3. GET /transactions/:id - Get one
4. PATCH /transactions/:id - Update (hanya pembuat/admin)
5. DELETE /transactions/:id - Delete (hanya pembuat/admin)
6. GET /transactions/summary/monthly/:month/:year

FILTERS:
- Filter by month/year
- Filter by type (INCOME/EXPENSE)
- Pagination (skip, take)

AUTHORIZATION:
- BENDAHARA & ADMIN: Bisa create/edit/delete
- PENGURUS: View only
- User hanya bisa edit/delete transaksi sendiri

FILES:
1. transactions.service.ts
2. transactions.controller.ts
3. DTOs (create, update, response, query)
4. transactions.module.ts"
```

#### Langkah 2.6: Reports Module
```
Prompt:

"Buatkan Reports Module untuk laporan keuangan:

ENDPOINTS:
1. GET /reports/monthly/:month/:year - Monthly summary
2. GET /reports/yearly/:year - Yearly summary dengan monthly breakdown
3. GET /reports/category-breakdown - Breakdown by category

DATA:
- Total income, expense, balance
- Transaction count
- Monthly comparison

CALCULATIONS:
- Calculate dari transactions table (no stored calculation)
- Group by category
- Sum amount per type

FILES:
1. reports.service.ts dengan 3 methods
2. reports.controller.ts
3. reports.module.ts"
```

#### Langkah 2.7: Common Guards & Decorators
```
Prompt:

"Buatkan role-based access control system:

COMPONENTS:
1. @Roles('ADMIN') decorator - untuk specify required roles
2. @CurrentUser() decorator - extract user dari request
3. RolesGuard - untuk check authorization

USAGE:
- @UseGuards(JwtAuthGuard, RolesGuard)
- @Roles('ADMIN', 'BENDAHARA')
- @CurrentUser() user

FEATURES:
- Check user role before allowing access
- Throw ForbiddenException jika role tidak match
- Support multiple roles
- Efficient metadata reading"
```

#### Langkah 2.8: Main Configuration
```
Prompt:

"Buatkan app.module.ts dan main.ts untuk NestJS:

APP MODULE:
- Import semua feature modules
- Setup ConfigModule untuk .env
- Setup validation global pipe
- Setup CORS untuk frontend

MAIN FILE:
- Create NestJS app
- Setup global pipes (ValidationPipe)
- Setup CORS headers
- Setup Swagger documentation
- Listen pada port 3000

INCLUDE:
1. app.module.ts - Root module
2. main.ts - Entry point lengkap dengan dokumentasi
3. app.controller.ts - Health check endpoint
4. .env.example - Environment template"
```

---

### STEP 3: Validasi Backend

Setelah semua backend files selesai:

```bash
# 1. Install dependencies
npm install

# 2. Setup Prisma
npx prisma migrate dev --name init

# 3. Run backend
npm run start

# 4. Test endpoints dengan Postman/curl
```

#### Test Commands:
```bash
# Register
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@test.com",
    "password": "password123",
    "name": "Admin",
    "role": "ADMIN"
  }'

# Login
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@test.com",
    "password": "password123"
  }'

# Create transaction (dengan token dari login)
curl -X POST http://localhost:3000/api/v1/transactions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer {TOKEN}" \
  -d '{
    "date": "2026-07-05",
    "type": "INCOME",
    "amount": 500000,
    "category": "Shodaqoh",
    "description": "Test transaction"
  }'
```

---

### STEP 4: Frontend (Vue.js)

#### Langkah 4.1: Setup Vue.js Project
```
Prompt:

"Buatkan struktur project Vue.js 3 dengan TypeScript untuk Kas Langgar:

STRUKTUR:
- pages/ folder untuk page components
- components/ untuk reusable components
- stores/ untuk Pinia state management
- services/ untuk API calls
- router/ untuk Vue Router

SETUP:
1. Vite configuration
2. TypeScript config
3. Router configuration
4. Pinia store setup
5. Axios configuration dengan JWT interceptor

DEPENDENCIES:
- pinia untuk state management
- vue-router untuk routing
- axios untuk HTTP
- chart.js untuk charts
- vee-validate untuk form validation"
```

#### Langkah 4.2: API Service & Axios Config
```
Prompt:

"Buatkan API service untuk Vue.js yang connect ke NestJS backend:

FEATURES:
1. Axios configuration dengan baseURL
2. JWT token interceptor (auto inject di headers)
3. Error interceptor (handle 401, network errors)
4. API methods untuk setiap endpoint

SERVICES:
1. src/services/api.ts - Axios configuration
2. src/services/authService.ts - Login, register, logout
3. src/services/transactionService.ts - CRUD transactions
4. src/services/userService.ts - User management
5. src/services/reportService.ts - Reports

REQUIREMENTS:
- Auto refresh token jika expired
- Handle CORS
- JSON request/response
- Proper error messages"
```

#### Langkah 4.3: Pinia Stores
```
Prompt:

"Buatkan Pinia stores untuk state management:

STORES:
1. authStore.ts
   - user info
   - token
   - login/logout/register methods
   - isLoggedIn computed

2. transactionStore.ts
   - transactions list
   - CRUD methods
   - filter/search

3. uiStore.ts
   - loading state
   - modal state
   - notifications

FEATURES:
- Persist auth token ke localStorage
- Auto redirect ke login jika unauthorized
- Loading states untuk setiap action
- Error handling"
```

#### Langkah 4.4: Pages & Components
```
Prompt:

"Buatkan Vue pages untuk Kas Langgar:

PAGES:
1. LoginPage.vue - Login form
2. DashboardPage.vue - Overview dengan charts & stats
3. TransactionsPage.vue - List transactions dengan filter
4. AddTransactionPage.vue - Form untuk create/edit
5. UsersPage.vue - User management (admin)
6. ReportsPage.vue - Detailed reports

COMPONENTS (REUSABLE):
1. TransactionForm.vue - Form untuk create/edit
2. TransactionTable.vue - Table dengan pagination
3. MonthlyChart.vue - Chart untuk monthly data
4. UserDialog.vue - Dialog untuk create/edit user

REQUIREMENTS:
- Material UI styling
- Form validation
- Loading states
- Error messages
- Responsive design"
```

---

## 🔄 Workflow di Antigravity

### Cara Kerja:
1. **Copy prompt** dari file `antigravity_prompt_kas_langgar.md`
2. **Paste ke Antigravity** editor
3. **Customize** sesuai kebutuhan (opsional)
4. **Click Generate/Submit**
5. **Review** code yang di-generate
6. **Copy ke project** Anda
7. **Test & adjust** jika perlu

### Tips Menggunakan Antigravity:

✅ **DO:**
- Paste prompt lengkap dengan context
- Sebutkan secara spesifik apa yang di-inginkan
- Include file names & folder structure
- Mention dependencies & requirements
- Ask untuk dokumentasi di code

❌ **DON'T:**
- Paste prompt yang terlalu pendek
- Lupa mention tech stack
- Tidak include examples
- Expect code 100% production-ready
- Skip testing generated code

---

## 📝 Prompt Template (Reusable)

Untuk membuat custom prompt, gunakan template:

```
"Buatkan [FILE TYPE] untuk [PROJECT] dengan:

REQUIREMENTS:
1. [Requirement 1]
2. [Requirement 2]
3. [Requirement 3]

FILES:
1. [file1.ts] - [Description]
2. [file2.ts] - [Description]

FEATURES:
- [Feature 1]
- [Feature 2]
- [Feature 3]

INCLUDE:
- Detailed comments
- TypeScript types
- Error handling
- [Anything else needed]"
```

---

## ✅ Checklist Implementasi

### Backend (NestJS)
- [ ] Project structure created
- [ ] Prisma schema defined
- [ ] MySQL database created
- [ ] Auth module implemented
- [ ] Users CRUD implemented
- [ ] Transactions CRUD implemented
- [ ] Reports module implemented
- [ ] Guards & decorators implemented
- [ ] All endpoints tested
- [ ] Error handling implemented

### Frontend (Vue.js)
- [ ] Project created dengan Vite
- [ ] Router setup lengkap
- [ ] Pinia stores configured
- [ ] API services implemented
- [ ] Login page created
- [ ] Dashboard page created
- [ ] Transaction pages created
- [ ] Reports page created
- [ ] User management page created
- [ ] Material UI styling applied

### Testing
- [ ] Backend API endpoints tested
- [ ] Frontend pages rendered correctly
- [ ] Authentication flow working
- [ ] CRUD operations working
- [ ] Reports calculating correctly
- [ ] Error handling working

### Deployment
- [ ] Backend ready for production
- [ ] Frontend build successful
- [ ] Environment variables configured
- [ ] Database backups setup
- [ ] CORS configured properly

---

## 🆘 Troubleshooting

### Masalah Umum

**Problem:** "Cannot read properties of undefined"
```
Solution:
1. Check apakah service sudah di-inject
2. Check apakah data sudah di-load sebelum render
3. Add null checks di template: {{ data?.field || 'N/A' }}
```

**Problem:** "401 Unauthorized"
```
Solution:
1. Check apakah token masih valid
2. Check apakah Authorization header dikirim
3. Check JWT_SECRET sama di backend & frontend
4. Refresh token atau re-login
```

**Problem:** "CORS error"
```
Solution:
1. Check CORS origin di app.module.ts
2. Add frontend URL ke allowed origins
3. Check request headers
```

**Problem:** "Database connection refused"
```
Solution:
1. Start MySQL service
2. Check DATABASE_URL di .env
3. Check credentials benar
4. Run: npx prisma migrate dev
```

---

## 📚 Next Steps Setelah Generate

1. **Review Code:** Baca semua file yang di-generate
2. **Adjust:** Customize sesuai kebutuhan spesifik
3. **Test:** Test setiap endpoint/page
4. **Integrate:** Connect frontend ke backend
5. **Deploy:** Setup hosting untuk production
6. **Monitor:** Setup logging & error tracking

---

## 🎓 Learning Resources

Saat implementasi, baca dokumentasi:
- **NestJS:** https://docs.nestjs.com
- **Prisma:** https://www.prisma.io/docs
- **Vue 3:** https://vuejs.org/guide/
- **Pinia:** https://pinia.vuejs.org/
- **Material UI:** https://www.materialui.org/

---

## 💬 Pro Tips

1. **Generate incrementally:** Tidak perlu generate semua sekaligus
2. **Test early:** Test setiap module sebelum lanjut
3. **Review code:** Pahami code yang di-generate
4. **Customize:** Jangan takut untuk modify sesuai kebutuhan
5. **Keep prompts:** Simpan prompts untuk referensi/re-use
6. **Document:** Dokumentasi code Anda sendiri
7. **Version control:** Commit ke git regularly

---

**Ready to start implementing? 🚀**

**Next: Go to `antigravity_prompt_kas_langgar.md` dan mulai dengan TASK 1.1!**
