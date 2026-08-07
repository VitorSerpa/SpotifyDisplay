CC = cl
CFLAGS = /nologo /TC /Wall /Od /Zi

program: spotify_requests.c program.c
	${CC} ${CFLAGS} spotify_requests.c program.c -0 program

run: program
	./program

clean:
	rm -f program