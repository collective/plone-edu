# syntax=docker/dockerfile:1
ARG PLONE_VERSION=6.0.10
FROM plone/server-builder:${PLONE_VERSION} as builder

WORKDIR /app

# Add local code
COPY . .

# Install local requirements and pre-compile mo files
RUN <<EOT
    set -e
    bin/pip install mxdev
    mv requirements-docker.txt requirements.txt
    sed -i 's/-e src\/plone_edu\[test\]/src\/plone_edu/g' mx.ini
    bin/mxdev -c mx.ini
    bin/pip install -r requirements-mxdev.txt
    bin/python /compile_mo.py
    rm -Rf src/
EOT

FROM plone/server-prod-config:${PLONE_VERSION}

LABEL maintainer="Plone Foundation <collective@plone.org>" \
      org.label-schema.name="plone-edu-backend" \
      org.label-schema.description="Plone EDU backend image." \
      org.label-schema.vendor="Plone Foundation"

# Copy /app from builder
COPY --from=builder /app /app

RUN <<EOT
    set -e
    ln -s /data /app/var
EOT
