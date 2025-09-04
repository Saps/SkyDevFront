import { HttpErrorResponse, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Cookies } from '@app/services';
import { catchError, throwError } from 'rxjs';

export function jwtInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
  const [cookies] = [inject(Cookies)];
  const token = cookies.get('token');
  if (token) {
    request = request.clone({ setHeaders: { authorization: `Bearer ${token}` } });
  }

  return next(request).pipe(
    catchError((res: HttpErrorResponse) => {
      if (res.status === 401) {
        cookies.getArray().forEach(([key]) => cookies.set(`${key}=; max-age=0; path=/`));
      }
      return throwError(() => res);
    })
  );
}
