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

| Functionality         | Current Standard                                                                                                                                                                                                          | Experimental                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Language**          | <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>                                                                                                                                                  | None                                                                       |
| **Rendering**         | <a href="https://react.dev/" target="_blank">React</a>                                                                                                                                                                    | None                                                                       |
| **Framework**         | <a href="https://nextjs.org/" target="_blank">Next.js</a>                                                                                                                                                                 | None                                                                       |
| **Component Library** | <a href="https://mui.com/material-ui/" target="_blank">MUI Core</a> & <a href="https://mui.com/x/" target="_blank">MUI X</a>                                                                                              | <a href="https://ui.shadcn.com/" target="_blank">shadcn/ui</a>             |
| **Icons**             | <a href="https://mui.com/material-ui/material-icons/" target="_blank">@mui/icons-material</a> and <a href="https://pictogrammers.com/library/mdi/" target="_blank">mdi-material-ui</a>, with fallback to custom `SvgIcon` | None                                                                       |
| **Charts**            | <a href="https://recharts.org/" target="_blank">Recharts</a> (DLS provides custom Chart components)                                                                                                                       | <a href="https://mui.com/x/react-charts/" target="_blank">MUI X Charts</a> |
| **Maps**              | <a href="https://www.mapbox.com/" target="_blank">Mapbox</a> via <a href="https://visgl.github.io/react-map-gl/" target="_blank">react-map-gl</a> (DLS provides custom Map components)                                    | None                                                                       |
| **Component Testing** | <a href="https://www.chromatic.com/" target="_blank">Chromatic</a> + <a href="https://storybook.js.org/" target="_blank">Storybook</a>                                                                                    | None                                                                       |
| **Unit Testingr**     | <a href="https://jestjs.io/" target="_blank">Jest</a>                                                                                                                                                                     | <a href="https://vitest.dev/" target="_blank">Vitest</a>                   |

## Standard Adoption Process

1. **Research Phase**: Team identifies potential new technology or tool
2. **Experimental Phase**: Technology is "baked" in a real project to prove viability
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
- **Economies of Scale**: Shared expertise reduces cost

## Contributing to Standards

Team members are encouraged to:

- Propose new technologies for experimentation
- Share experiences from experimental implementations
- Challenge existing standards when better alternatives emerge
- Document lessons learned from experimental phases

---

_This document is living and should be updated as standards evolve. All changes should be discussed and approved by the front-end collective._
