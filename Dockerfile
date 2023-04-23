FROM alpine:3.14

WORKDIR /github taskkk

COPY demo.js .

RUN javac demo.js

CMD java demo
