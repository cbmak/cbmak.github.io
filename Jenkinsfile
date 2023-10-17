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

    // Add a when block to trigger the pipeline only for merged pull requests
    when {
        expression {
            // Check if the event is a pull request event and if the pull request is merged
            def buildCauses = currentBuild.rawBuild.buildCauses
            return buildCauses.any {
                it.getClass().name == 'org.jenkinsci.plugins.workflow.cps.replay.ReplayCause'
            } && buildCauses.find { it.getShortDescription() == 'Merged' } != null
        }
    }
}
