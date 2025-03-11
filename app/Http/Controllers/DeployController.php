// app/Http/Controllers/DeployController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DeployController extends Controller
{
    public function deploy()
    {
        shell_exec('/var/www/bianco/deploy.sh');
        return response('Deployment script executed.', 200);
    }
}
