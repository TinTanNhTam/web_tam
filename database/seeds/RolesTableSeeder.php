<?php

use Illuminate\Database\Seeder;
use App\Repositories\RoleRepositoryInterface;

class RolesTableSeeder extends Seeder
{
    protected $repository;
    public function __construct(RoleRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array_name = [
            'Dashboard', // 1
            'User', // 
            'Product', // 2

        ];
        $array_group_id = [
            1,
            2,
            3,
          
        ];

        $array_description = [
            'Home',
            'Tài khoản',
            'Sản phẩm',
        ];
        $array_router_link = [
            '/dashboards',
            '/user',
            '/product',
           
        ];

        
        $array_index = [
            1,
            2,
            3,
           
        ];

        $array_icon_name = [
            'icon-home',
            'icon-home',
            'icon-puzzle',
           

        ];

        foreach ($array_name as $key => $name) {
            \App\Role::create([
                'code'          => $this->repository->generateCode('ROLE'),
                'name'          => $name,
                'description'   => $array_description[$key],
                'router_link'   => $array_router_link[$key],
                'icon_name'     => $array_icon_name[$key],
                'index'         => $array_index[$key],
                'group_role_id' => $array_group_id[$key],
                'active'        => true
            ]);
        }
    }
}
