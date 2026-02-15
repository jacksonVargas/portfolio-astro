import type { ImageMetadata } from 'astro'
import login from './assets/login.png'
import devControle from './assets/dev-controle.png'

export interface Project {
  id: number
  cover: ImageMetadata
  title: string
  description: string
  link: string
  git: string
}

export const projects: Project[] = [
  {
    id: 1,
    cover: login,
    title: 'Login Better Auth',
    description: 'Sistema de login com email e senha mais login social com github usando o better-auth.',
    link: 'https://login-better-auth.vercel.app/login',
    git: 'https://github.com/jacksonVargas/login-better-auth'
  },
  {
    id: 2,
    cover: devControle,
    title: 'DevControle',
    description: 'Sistema para ter controle dos clientes e abrir chamados, feito com next usando api routes.',
    link: 'https://dev-controle-app.vercel.app/',
    git: 'https://github.com/jacksonVargas/dev_controle_app'
  },
]
