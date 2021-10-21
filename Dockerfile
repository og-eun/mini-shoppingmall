# 이미지 이름: node, 태그명: 16 > node.js 16 버전 이미지
FROM node:16

RUN mkdir -p /app

WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]

