<?php
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App{
/**
 * App\User
 *
 * @property int $id
 * @property string $code Mã
 * @property string $fullName Họ tên
 * @property string|null $username Tài khoản
 * @property string|null $password Mật khẩu
 * @property string|null $address Địa chỉ
 * @property string|null $phone Điện thoại
 * @property string|null $birthday Ngày sinh
 * @property string $sex Giới tính
 * @property string|null $email Email
 * @property string|null $note Ghi chú
 * @property int $created_by Người tạo
 * @property int $updated_by Người sửa
 * @property string $created_date Ngày tạo
 * @property string|null $updated_date Ngày cập nhật
 * @property int $active Kích hoạt
 * @property string|null $remember_token
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereBirthday($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCreatedDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereFullName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereNote($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereSex($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUpdatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUpdatedDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUsername($value)
 */
	class User extends \Eloquent {}
}

namespace App{
/**
 * App\GroupRole
 *
 * @property int $id
 * @property string $code Mã
 * @property string $name Tên
 * @property string|null $description Mô tả
 * @property string $icon_name icon cho aside
 * @property int $index vị trí thứ tự
 * @property int $active Kích hoạt
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GroupRole whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GroupRole whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GroupRole whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GroupRole whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GroupRole whereIconName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GroupRole whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GroupRole whereIndex($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GroupRole whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GroupRole whereUpdatedAt($value)
 */
	class GroupRole extends \Eloquent {}
}

namespace App{
/**
 * App\Role
 *
 * @property int $id
 * @property string $code Mã
 * @property string $name Tên
 * @property string|null $description Mô tả
 * @property string $router_link router link cho angular
 * @property string $icon_name icon cho aside
 * @property int $index vị trí thứ tự
 * @property int $active Kích hoạt
 * @property int $group_role_id Nhóm quyền
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereGroupRoleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereIconName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereIndex($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereRouterLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereUpdatedAt($value)
 */
	class Role extends \Eloquent {}
}

namespace App{
/**
 * App\UserRole
 *
 * @property int $id
 * @property int $user_id Nguời dùng
 * @property int $role_id Quyền
 * @property int $created_by Người tạo
 * @property int $updated_by Người cập nhật
 * @property string $created_date Ngày tạo
 * @property string|null $updated_date Ngày cập nhật
 * @property int $active Kích hoạt
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserRole whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserRole whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserRole whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserRole whereCreatedDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserRole whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserRole whereRoleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserRole whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserRole whereUpdatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserRole whereUpdatedDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\UserRole whereUserId($value)
 */
	class UserRole extends \Eloquent {}
}

