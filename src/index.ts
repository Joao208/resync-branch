import { Toolkit } from 'actions-toolkit'

const tools = new Toolkit()

async function run() {
  const { PERSONAL_TOKEN, BRANCH_NAME, DEFAULT_BRANCH } = tools.inputs
  const { owner, repo } = tools.context.repo

  tools.log.info(`Gonna try rebase ${BRANCH_NAME} on ${DEFAULT_BRANCH}`)

  await tools.exec(
    `git remote set-url --push origin https://${PERSONAL_TOKEN}@github.com/${owner}/${repo}.git`
  )
  await tools.exec('git remote update')
  await tools.exec('git fetch')
  await tools.exec(`git checkout origin/${DEFAULT_BRANCH}`)
  await tools.exec(`git pull origin ${DEFAULT_BRANCH}`)
  await tools.exec(`git checkout --track origin/${BRANCH_NAME}`)
  await tools.exec(`git pull origin ${BRANCH_NAME}`)
  await tools.exec(`git reset --hard origin/${DEFAULT_BRANCH}`)
  await tools.exec(`git push origin ${BRANCH_NAME} --force`)

  tools.log.success('We did it!')
}

run()
