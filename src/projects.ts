import type { ImageMetadata } from 'astro'
import codigos from './assets/codigos.webp'

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
    cover: codigos,
    title: 'teste',
    description: 'teste da description',
    link: '#',
    git: '#'
  }
]
