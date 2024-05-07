import { EnemyType, RoomType, ProjectileType, PowerupType, BossType } from "./enums";

class GameEntity {
    x: number;
    y: number;
    dx: number;
    dy: number;
    mouv_speed: number;

    constructor(x: number, y: number, dx: number, dy: number, mouv_speed: number) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.mouv_speed = mouv_speed;
    }
}

class Character extends GameEntity {

    constructor(x: number, y: number, dx: number, dy: number, mouv_speed: number) {
        super(x, y, dx, dy, mouv_speed);
    }
}

class Enemy extends GameEntity {
    enemy_type: EnemyType;

    constructor(enemy_type: EnemyType, x: number, y: number, dx: number, dy: number, mouv_speed: number) {
        super(x, y, dx, dy, mouv_speed)

        this.enemy_type = enemy_type;
    }
}

class Boss extends GameEntity {
    boss_type: BossType;

    constructor(boss_type: BossType, x: number, y: number, dx: number, dy: number, mouv_speed: number) {
        super(x, y, dx, dy, mouv_speed)

        this.boss_type = boss_type;
    }
}

class Floor {

}

class Powerups {
    powerup_type: PowerupType;

    constructor(powerup_type: PowerupType) {
        this.powerup_type = powerup_type;
    }


}

class Room {
    room_type: RoomType;

    constructor(room_type: RoomType) {
        this.room_type = room_type;
    }
    
}

class Projectiles {
    projectile_type: ProjectileType;

    proj_speed: number;
    proj_dmg: number;
    proj_range: number;

    constructor(projectile_type: ProjectileType, proj_speed: number, proj_dmg: number, proj_range: number) {
        this.proj_speed = proj_speed;
        this.proj_dmg = proj_dmg;
        this.proj_range = proj_range;
        this.projectile_type = projectile_type; 
    }
}