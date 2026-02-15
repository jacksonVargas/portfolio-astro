import type { ImageMetadata } from 'astro'
import codigos from './assets/codigos.webp'
import login from './assets/login.png'

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
  }
]
