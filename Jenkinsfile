pipeline {
  agent any
  stages {
    stage('echo') {
      steps {
        echo 'Hello World!'
      }
    }
    stage('docker') {
      steps {
        sh '''#!/bin/bash -xx

docker info'''
      }
    }
  }
}