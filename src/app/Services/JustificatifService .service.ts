import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JustificatifService {
  private baseUrl: string = "http://localhost:7080/api/v1/test/justificatif";

  constructor(private http: HttpClient) { }

  uploadJustificatifFile(file: File, description: string, SalariesId: string):
    Observable<HttpResponse<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/upload`, formData, { observe: 'response', responseType: 'arraybuffer' });
  }
  downloadJustificatif(id: String): Observable<HttpResponse<any>> {
    return this.http.get(`${this.baseUrl}/download/${id}`, {
      observe: 'response',
      responseType: 'arraybuffer' as 'json'
    }).pipe(
      map(response => {
        const blob = new Blob([response.body instanceof Object ? JSON.stringify(response.body) : response.body || ''], { type: 'application/pdf' });
        saveAs(blob, 'fiche de paie.pdf');
        return response;
      })
    );
  }
  downloadFile(operationId: string): Observable<Blob> {
    const url = `URL_de_votre_endpoint_de_téléchargement/${operationId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/pdf', // Modifier le type MIME en fonction du type de fichier
      'Authorization': 'Bearer VOTRE_JETON_JWT_SI_NÉCESSAIRE' // Ajouter l'en-tête d'autorisation si nécessaire
    });

    return this.http.get(url, { responseType: 'blob', headers: headers });
  }
}
