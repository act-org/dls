# Front-End Technology Standards

## Overview

This document defines the front-end technology standards for our development
collective. These standards ensure consistency across all downstream projects,
enabling efficiency gains through reusability and economies of scale.
When projects use the same tools and patterns, developers can move seamlessly
between projects as the development experience feels familiar and consistent.

## Philosophy

While our standards don't change frequently, we continuously analyze and
challenge them as a team. We actively experiment with new tools and technologies
by "proving them out" and "baking them" within a project before they become
company-wide standards. This approach allows us to:

- Validate new technologies in real-world scenarios
- Assess their impact on developer experience and project outcomes
- Make informed decisions about adoption based on actual usage
- Maintain stability while staying current with evolving technology

## Technology Standards

| Functionality         | Current Standard                                                                                                                                                                        | Experimental                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| **Language**          | [TypeScript](https://www.typescriptlang.org/)                                                                                                                                           | None                                             |
| **Render Library**    | [React](https://react.dev/)                                                                                                                                                             | None                                             |
| **Framework**         | [Next.js](https://nextjs.org/)                                                                                                                                                          | None                                             |
| **Component Library** | [@mui/material](https://mui.com/material-ui/) (MUI Core) + [MUI-X](https://mui.com/x/) libraries                                                                                        | [@shadcn/ui](https://ui.shadcn.com/)             |
| **Icons**             | [@mui/icons-material](https://mui.com/material-ui/material-icons/) and [mdi-material-ui](https://github.com/TeamWertarbyte/mdi-material-ui), with fallback to custom icon via `SvgIcon` | None                                             |
| **Charts**            | [Recharts](https://recharts.org/) (DLS provides custom Chart components)                                                                                                                | [@mui/x-charts](https://mui.com/x/react-charts/) |
| **Maps**              | [Mapbox](https://www.mapbox.com/) via [react-map-gl](https://visgl.github.io/react-map-gl/) (DLS provides custom Map components)                                                        | None                                             |
| **Component Testing** | [Chromatic](https://www.chromatic.com/) + [Storybook](https://storybook.js.org/)                                                                                                        | None                                             |
| **Test Runner**       | [Jest](https://jestjs.io/)                                                                                                                                                              | [Vitest](https://vitest.dev/)                    |

## Standard Adoption Process

1. **Research Phase**: Team identifies potential new technology or tool
2. **Experimental Phase**: Technology is "baked into" a real project to prove viability
3. **Evaluation Phase**: Team assesses the experimental implementation for:
   - Developer experience improvements
   - Performance impact
   - Maintenance overhead
   - Community support and longevity
   - Integration with existing toolchain
4. **Decision Phase**: Based on evaluation, technology either:
   - Becomes the new standard (replacing current)
   - Remains experimental for further testing
   - Is rejected and removed from consideration

## Benefits of Standardization

- **Developer Efficiency**: Familiar tools reduce onboarding time and context switching
- **Code Reusability**: Shared patterns and components across projects
- **Knowledge Sharing**: Team expertise builds around common tools
- **Maintenance**: Centralized knowledge reduces support burden
- **Quality**: Consistent tooling enables better testing and quality assurance
- **Economies of Scale**: Bulk licensing and shared expertise reduce costs

## Contributing to Standards

Team members are encouraged to:

- Propose new technologies for experimentation
- Share experiences from experimental implementations
- Challenge existing standards when better alternatives emerge
- Document lessons learned from experimental phases

---

_This document is living and should be updated as standards evolve. All changes should be discussed and approved by the front-end collective._
