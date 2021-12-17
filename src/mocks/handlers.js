import { rest } from 'msw'

export const handlers = [
  rest.get('https://www.example.com', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
      }),
    )
  }),
]
