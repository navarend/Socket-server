import { Router, Request, Response } from "express";

const router = Router();

router.get('/messages', (req: Request, res: Response) => {
  res.json({
    ok: true,
    message: 'Success !!!'
  });
});

router.post('/messages', (req: Request, res: Response) => {
  const body = req.body.body;
  const to = req.body.to;

  res.json({
    ok: true,
    body, to
  });
});

router.post('/messages/:id', (req: Request, res: Response) => {
  const body = req.body.body;
  const to = req.body.to;
  const id = req.params.id;

  res.json({
    ok: true,
    body, to, id
  });
});

export default router;
