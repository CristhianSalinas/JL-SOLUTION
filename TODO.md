# TODO: Fix Netlify pnpm patch error

- [x] 1. Editar package.json: Remover sección patchedDependencies innecesaria.\n- [x] 2. Eliminar package-lock.json (lockfile de npm irrelevante).\n- [x] 3. Ejecutar `pnpm install` para generar pnpm-lock.yaml limpio sin referencias a patch.
- [ ] 4. Verificar que no hay refs a patch en lockfile.
- [ ] 5. Commit cambios y push a git.
- [ ] 6. Redeploy en Netlify (automático).
