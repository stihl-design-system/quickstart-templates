FROM mcr.microsoft.com/playwright:v1.46.0-focal

ENV PATH="/opt/quickstart-templates/bin:${PATH}"

COPY --chmod=0755 --chown=node:node ./entrypoint.sh "/opt/quickstart-templates/entrypoint.sh"
COPY --chmod=0755 --chown=node:node ./bin "/opt/quickstart-templates/bin"

ENTRYPOINT [ "/opt/quickstart-templates/entrypoint.sh" ]
