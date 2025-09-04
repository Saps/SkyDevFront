FROM node:22.18.0-slim AS deps
WORKDIR /app

COPY package*.json .
RUN npm install -g @angular/cli@20
RUN npm ci
COPY . .
RUN ng build

FROM nginx:1.23.3-alpine
COPY --from=deps /app/dist/ai-hr-ui/browser /usr/share/nginx/html/
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
