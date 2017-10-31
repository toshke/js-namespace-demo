pipeline {
  agent any
  stages {
    stage('echo') {
      parallel {
        stage('echo') {
          steps {
            echo 'Hello World!'
          }
        }
        stage('printenv') {
          steps {
            sh 'printenv'
            sh '''#!/usr/bin/env python

import os

print os.environ'''
          }
        }
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
        
        sh '''#!/bin/bash 

ls -la'''
      }
    }
  }
}