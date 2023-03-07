pipeline {

    agent any

    environment {
        AWS_ACCESS_KEY_ID     = credentials('aws-secret-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-access-key')
        SLACK_WEBHOOK         = credentials('slack-webhook-url')
        CXGURU_WEBHOOK        = credentials('cxguru-notify-webhook')
        ASK_KIJI_WEBHOOK      = credentials('ask-kiji-webhook')
        COSENTLY_WEBHOOK      = credentials('cosently-webhook')
        SMATPROP_WEBHOOK      = credentials('smatprop-webhook')
        TSIGIRO_WEBHOOK       = credentials('tsigiro-webhook')
    }
    
    tools {nodejs "NODEJS"} // NodeJS v16.13.2

    stages {
    
        stage('Install Packages') {
            steps {
                sh 'npm install --legacy-peer-deps'
            }
        }
        
        stage('Create Build') {
            steps {
                sh "node build.js ${env.BRANCH_NAME}" 
            }
        }

        stage('Deploy Build') {
            steps {
                sh "node ../tribetron-builder_production/index.js ${env.BRANCH_NAME} ${AWS_ACCESS_KEY_ID} ${AWS_SECRET_ACCESS_KEY} ${env.JOB_NAME}"
            }
        }
        
        stage('Fetch Commit') {
                steps {
                    script {
                        env.GIT_COMMIT_MSG = sh (script: 'git show -s --format=%B', returnStdout: true).trim()
                    }
                }
            }

        stage('Fetch User') {
                steps {
                    script {
                        env.GIT_COMMIT_USER = sh (script: 'git show -s --format=%ae', returnStdout: true).trim()
                    }
                }
            }

        stage('Alert Build') {
            steps {
                sh "node ../tribetron-builder_production/notify.js ${env.BRANCH_NAME} ${SLACK_WEBHOOK} '${GIT_COMMIT_MSG}' ${env.JOB_NAME} ${CXGURU_WEBHOOK} ${ASK_KIJI_WEBHOOK} ${GIT_COMMIT_USER} ${COSENTLY_WEBHOOK} ${SMATPROP_WEBHOOK} ${TSIGIRO_WEBHOOK}"
            }
        }

    }
}