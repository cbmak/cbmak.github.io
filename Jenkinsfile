pipeline {
    agent any
    
    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Test') {
        // Add a when block to trigger the pipeline only for merged pull requests
            when {
                expression {
                    // Check if the CHANGE_ID and CHANGE_TARGET environment variables are present
                    return (env.CHANGE_ID != null && env.CHANGE_TARGET != null)
                }
            }           
            steps {
                sh 'printenv'
            }
        }
    }

    post {
        success {
            echo 'Build and test succeeded!'
        }
        failure {
            echo 'Build or test failed!'
        }
    }
}
