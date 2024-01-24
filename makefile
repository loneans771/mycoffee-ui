build:
ifndef VERSION
	podman --remote build -t docker.io/chainsmart/smartcoffee -f dockerfile .
else
	podman --remote build -t docker.io/chainsmart/smartcoffee:$(VERSION) -f dockerfile .
endif

push:
ifndef VERSION
	podman push docker.io/chainsmart/smartcoffee
else
	podman push docker.io/chainsmart/smartcoffee:$(VERSION)
endif