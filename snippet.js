function test1() {
    const { spawn } = require(‘child_process’);
    function downloadGitCommit1(gitBranch, gitUrl, sourceCodePath) {
        // ruleid: spawn-git-clone
        const gitClone = spawn(‘git’, [
            ‘clone’,
            ‘--branch’, gitBranch,
            ‘--depth’, ‘1’,
            gitUrl,
            sourceCodePath
        ]);
        return gitClone;
    }
}