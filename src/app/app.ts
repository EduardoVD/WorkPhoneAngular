import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Article } from './components/article/article';
import { Section } from './components/section/section';
import { Footer } from './components/footer/footer';

@Component({
  imports: [Header, Main, Article, Section, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
