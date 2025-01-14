<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240722112534 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE comment ADD created_at DATETIME NOT NULL');
        $this->addSql('ALTER TABLE interaction_comment ADD created_at DATETIME NOT NULL');
        $this->addSql('ALTER TABLE interaction_publication ADD created_at DATETIME NOT NULL');
        $this->addSql('ALTER TABLE publication ADD created_at DATETIME NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE comment DROP created_at');
        $this->addSql('ALTER TABLE interaction_comment DROP created_at');
        $this->addSql('ALTER TABLE interaction_publication DROP created_at');
        $this->addSql('ALTER TABLE publication DROP created_at');
    }
}
