import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigParams } from '../shared/models/config-params';
import { Filme } from '../shared/models/filme';
import { ConfigParamsService } from './config-params.service';

const URL = 'http://localhost:3000/filmes/';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient, private configParamsService: ConfigParamsService) { }

  salvar(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(URL, filme);
  }

  editar(filme: Filme): Observable<Filme> {
    return this.http.put<Filme>(URL + filme.id, filme);
  }

  listar(config: ConfigParams): Observable<Filme[]> {
    return this.http.get<Filme[]>(URL, {params: this.configParamsService.configurarParametros(config)});
  }

  visualizar(id: number) : Observable<Filme> {
    return this.http.get<Filme>(URL + id);
  }

  excluir(id: number) : Observable<void> {
    return this.http.delete<void>(URL + id);
  }
}
