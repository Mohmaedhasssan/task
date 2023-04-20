FROM openjdk

WORKDIR /taskk

COPY MohamedHassan.java .

RUN javac MohamedHassan.java

CMD java MohamedHassan