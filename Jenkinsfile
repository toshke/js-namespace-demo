pipeline {
  agent any
  stages {
    stage('echo') {
      steps {
        parallel(
          "echo": {
            echo 'Hello World!'
            
          },
          "": {
            sh '''#!/bin/bash

docker info'''
            
          }
        )
      }
    }
  }
}