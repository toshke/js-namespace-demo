pipeline {
  agent any
  stages {
    stage('echo') {
      steps {
        parallel(
          "echo": {
            echo 'Hello World!'
            
          },
          "printenv": {
            sh 'printenv'
            sh '''#!/usr/bin/env python

import os

print os.environ'''
            
          }
        )
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
        script {
          def systemInformation = shellOut('uname -a')
          
          echo "SystemInformation\n${systemInformation}"
        }
        
      }
    }
  }
}