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
    stage('sharedlibrary') {
      steps {
        library 'github.com/base2Services/ciinabox-pipelines@master'
      }
    }
  }
}